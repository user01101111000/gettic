import { z } from "zod";

export function getFile(files: FileList | null): File | null {
    if (files && files.length > 0) return files[0];
    return null
}

const fileSchema: z.ZodType<FileList | null> = z
    .custom<FileList | null>((value: unknown): value is FileList => value instanceof FileList, {
        message: "ⓘ Please select a file.",
    })
    .refine((files: FileList | null): boolean => files!.length > 0, { message: "ⓘ Please select a file." })
    .refine(
        (files: FileList | null): boolean => Array.from(files as FileList).every((file) => file.size <= 5 * 1024 * 1024),
        { message: "ⓘ File size must be less than 5MB." }
    )
    .refine(
        (files: FileList | null): boolean =>
            Array.from(files as FileList).every((file) =>
                ["image/jpeg", "image/png"].includes(file.type)
            ),
        { message: "ⓘ Only JPEG and PNG images are allowed." }
    );

export const schema: z.ZodType<{ files: FileList | null; full_name: string; email: string; github_username: string }> = z.object({
    files: fileSchema,
    full_name: z.string().min(3, { message: "ⓘ Your name must be at least 3 characters." }),
    email: z.string().email({ message: "ⓘ Please enter a valid email." }),
    github_username: z.string().min(3, { message: "ⓘ Your GitHub username must be at least 3 characters." })
});