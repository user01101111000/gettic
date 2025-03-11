import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router";
import { User } from "../../../types/user_context";
import { v4 } from "uuid"
import { getFile, schema } from "../../../utils/form_schema";
import useUser from "../../../hooks/useUser";

const Form: () => React.JSX.Element = (): React.JSX.Element => {

    const { setUser } = useUser()!;
    const navigate: NavigateFunction = useNavigate();
    const [previewImage, setPreviewImage] = React.useState<string | null>(null);
    const [isDragOver, setIsDragOver] = React.useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<User>({
        resolver: zodResolver(schema)
    });

    const selectedImage: FileList | null = watch("files") || null;

    React.useEffect((): void => {

        const file: File | null = getFile(selectedImage);

        if (file) setPreviewImage(URL.createObjectURL(file));
        else setPreviewImage(null);


    }, [selectedImage]);

    const onSubmit: SubmitHandler<User> = (data: User): void => {

        const id: string = v4();

        setUser(data);
        navigate("/ticket/" + id, { replace: true });
    }

    return <form className="w-full max-w-[500px] flex flex-col items-center p-2 gap-2 lg:gap-3" onSubmit={handleSubmit(onSubmit)}>

        <div className="input_box">
            <p className="text-[.8rem] lg:text-[1rem]">Upload avatar</p>
            <label htmlFor="avatar" className={`w-full h-32 border-2 bg-white-10 border-dashed border-neutral-600 flex justify-center items-center flex-col gap-2 rounded-xl p-2 text-center cursor-pointer ${isDragOver ? "!bg-neutral-800 border-neutral-100 border-4" : ""} ${errors.files && "!border-red-500"}`}
                onDragOver={(e): void => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onDragEnter={(e): void => {
                    e.preventDefault();
                    e.stopPropagation();

                    setIsDragOver(true);
                }}
                onDragLeave={(e): void => {

                    e.preventDefault();
                    e.stopPropagation();

                    if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget as Node)) {
                        setIsDragOver(false);
                    }
                }}
                onDrop={(e): void => {
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
                        <button className="text-[.6rem] text-neutral-300 bg-neutral-700 px-2 py-1 rounded-xl cursor-pointer hover:bg-neutral-800 transition-colors duration-100 ease-in" onClick={(e): void => {
                            e.preventDefault();
                            e.stopPropagation();

                            setPreviewImage(null);
                            setValue("files", null);
                        }}>Remove image</button>
                        <button className="text-[.6rem] text-neutral-300 bg-neutral-700 px-2 py-1 rounded-xl cursor-pointer hover:bg-neutral-800 transition-colors duration-100 ease-in" onClick={(e): void => {

                            e.preventDefault();
                            e.stopPropagation();

                            const input = document.getElementById("avatar") as HTMLInputElement;
                            input.disabled = false;
                            input.click();

                        }}>Change image</button>
                    </div>
                </> : <>
                    <figure className="w-10 h-10 bg-neutral-700 rounded-xl flex items-center justify-center">
                        <img height={"33px"} width={"33px"} src="/icons/icon-upload.svg" alt="upload" />
                    </figure>
                    <p className="text-[.7rem] text-neutral-300">Drag and drop or click to upload</p>
                </>}

            </label>

            <input disabled={Boolean(previewImage)} type="file" {...register("files")} id="avatar" className="hidden" />

            <p className="text-[.6rem] text-neutral-400">ⓘ Upload your photo (JPG or PNG, max size : 5MB)</p>

            {errors.files && <p className="text-[.6rem] text-red-500">{errors.files.message}</p>}

        </div>

        <div className="input_box">
            <label className="text-[.8rem] lg:text-[1rem]" htmlFor="full_name">Full Name</label>
            <input className={`bg-white-10 text-[.8rem] p-[.4rem] rounded-[.5rem] border-2 border-neutral-600 ${errors.full_name && "border-red-500"}`} type="text" {...register("full_name")} id="full_name" placeholder="John Doe" />
            {errors.full_name && <p className="text-[.6rem] text-red-500">{errors.full_name.message}</p>}
        </div>


        <div className="input_box">
            <label className="text-[.8rem] lg:text-[1rem]" htmlFor="email">Email Address</label>
            <input className={`bg-white-10 text-[.8rem] p-[.4rem] rounded-[.5rem] border-2 border-neutral-600 ${errors.email && "border-red-500"}`} type="email" {...register("email")} id="email" placeholder="johndoe@example.com" />
            {errors.email && <p className="text-[.6rem] text-red-500">{errors.email.message}</p>}
        </div>

        <div className="input_box">
            <label className="text-[.8rem] lg:text-[1rem]" htmlFor="github_username">Github Username</label>
            <input className={`bg-white-10 text-[.8rem] p-[.4rem] rounded-[.5rem] border-2 border-neutral-600 ${errors.github_username && "border-red-500"}`} type="text" {...register("github_username")} id="github_username" placeholder="johndoe" />
            {errors.github_username && <p className="text-[.6rem] text-red-500">{errors.github_username.message}</p>}
        </div>

        <input type="submit" value={"Get ticket"} className="w-full text-[.8rem] font-bold p-[.4rem] bg-orange-500 rounded-[.5rem] mt-3 cursor-pointer lg:text-[1rem] hover:bg-orange-700 transition-colors duration-300 ease-in-out" />

    </form>
};


export default Form;