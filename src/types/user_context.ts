export type User = {
    files: FileList | null,
    full_name: string,
    email: string,
    github_username: string
}

export type UserContextProps = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export type UserContextProviderProps = {
    children: React.ReactNode
}
