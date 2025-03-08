import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router";
import { z } from "zod";


function getFile(files: FileList | null): File | null {
    if (files && files.length > 0) return files[0];
    return null
}


const fileSchema = z
    .custom<FileList | null>((value) => value instanceof FileList, {
        message: "Lütfen bir dosya yükleyin",
    })
    .refine((files) => files!.length > 0, { message: "En az bir dosya seçmelisiniz" })
    .refine(
        (files) => Array.from(files as FileList).every((file) => file.size <= 5 * 1024 * 1024),
        { message: "Dosya boyutu 5MB'yi geçemez" }
    )
    .refine(
        (files) =>
            Array.from(files as FileList).every((file) =>
                ["image/jpeg", "image/png"].includes(file.type)
            ),
        { message: "Sadece JPG veya PNG dosyaları yükleyebilirsiniz" }
    );

const schema = z.object({
    files: fileSchema,
    full_name: z.string().min(3, { message: "Adınız en az 3 karakterden oluşmalıdır" }),
    email: z.string().email({ message: "Lütfen geçerli bir e-posta adresi girin" }),
    github_username: z.string().min(3, { message: "Github kullanıcı adınız en az 3 karakterden oluşmalıdır" })
});


type Inputs = {
    files: FileList | null,
    full_name: string,
    email: string,
    github_username: string
};

const Form: () => React.JSX.Element = (): React.JSX.Element => {

    const navigate: NavigateFunction = useNavigate();
    const [previewImage, setPreviewImage] = React.useState<string | null>(null);
    const [isDragOver, setIsDragOver] = React.useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<Inputs>({
        resolver: zodResolver(schema)
    });


    const selectedImage: FileList | null = watch("files") || null;

    React.useEffect((): void => {

        const file: File | null = getFile(selectedImage);

        if (file) setPreviewImage(URL.createObjectURL(file));
        else setPreviewImage(null);


    }, [selectedImage]);

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs): void => {
        console.log(data);
        navigate("/ticket");
    }

    return <form className="w-full max-w-[500px] flex flex-col items-center p-4 gap-2 lg:gap-3" onSubmit={handleSubmit(onSubmit)}>

        <div className="input_box">
            <p className="text-[.8rem] lg:text-[1rem]">Upload avatar</p>
            <label htmlFor="avatar" className={`w-full h-32 border-2 bg-white-10 border-dashed border-neutral-600 flex justify-center items-center flex-col gap-2 rounded-xl p-2 text-center cursor-pointer ${isDragOver ? "!bg-neutral-800 border-neutral-100 border-4" : ""}`}
                onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onDragEnter={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    setIsDragOver(true);
                }}
                onDragLeave={(e) => {

                    e.preventDefault();
                    e.stopPropagation();

                    if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget as Node)) {
                        setIsDragOver(false);
                    }
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const files = e.dataTransfer.files;
                    if (files && files.length > 0) {
                        setValue("files", files);
                        setIsDragOver(false);
                    }
                }}
            >

                {previewImage ? <>
                    <figure className="h-10 w-10 rounded-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src={previewImage} alt="selected_image" />
                    </figure>

                    <div className="flex items-center gap-2 mt-2">
                        <button className="text-[.6rem] text-neutral-300 bg-neutral-700 px-2 py-1 rounded-xl cursor-pointer" onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            setPreviewImage(null);
                            setValue("files", null);
                        }}>Remove image</button>
                        <button className="text-[.6rem] text-neutral-300 bg-neutral-700 px-2 py-1 rounded-xl cursor-pointer" onClick={(e) => {

                            e.preventDefault();
                            e.stopPropagation();

                            const input = document.getElementById("avatar") as HTMLInputElement;
                            input.disabled = false;
                            input.click();

                        }}>Change image</button>
                    </div>
                </> : <>
                    <figure className="w-10 h-10 bg-neutral-700 rounded-xl flex items-center justify-center">
                        <img src="/icons/icon-upload.svg" alt="upload" />
                    </figure>
                    <p className="text-[.7rem] text-neutral-300">Drag and drop or click to upload</p>
                </>}

            </label>
            <input disabled={Boolean(previewImage)} type="file" {...register("files")} id="avatar" className="hidden" onDrop={(e) => {
                console.log("isledi");
            }} />
            <p className="text-[.6rem] text-neutral-400">ⓘ Upload your photo (JPG or PNG, max size : 5MB)</p>
            {errors.files && <p className="text-[.7rem] text-red-500">{errors.files.message}</p>}
        </div>


        <div className="input_box">
            <label className="text-[.8rem] lg:text-[1rem]" htmlFor="full_name">Full Name</label>
            <input className="bg-white-10 px-2 py-1 rounded-xl border-2 border-neutral-600 lg:p-2" type="text" {...register("full_name")} id="full_name" />
            {errors.full_name && <p className="text-[.7rem] text-red-500">{errors.full_name.message}</p>}
        </div>


        <div className="input_box">
            <label className="text-[.8rem] lg:text-[1rem]" htmlFor="email">Email Address</label>
            <input className="bg-white-10 px-2 py-1 rounded-xl border-2 border-neutral-600 lg:p-2" type="email" {...register("email")} id="email" />
            {errors.email && <p className="text-[.7rem] text-red-500">{errors.email.message}</p>}
        </div>



        <div className="input_box">
            <label className="text-[.8rem] lg:text-[1rem]" htmlFor="github_username">Github Username</label>
            <input className="bg-white-10 px-2 py-1 rounded-xl border-2 border-neutral-600 lg:p-2" type="text" {...register("github_username")} id="github_username" />
            {errors.github_username && <p className="text-[.7rem] text-red-500">{errors.github_username.message}</p>}
        </div>

        <input type="submit" value={"Generate my ticket"} className="w-full text-[.8rem] bg-orange-500 rounded-xl p-2 mt-3 cursor-pointer lg:text-[1rem] hover:bg-orange-700 transition-colors duration-300 ease-in-out" />

    </form>
};


export default Form;