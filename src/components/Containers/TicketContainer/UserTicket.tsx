import React from "react";
import { useUser } from "../../../context/UserContext";
import { useParams } from "react-router";
import html2canvas from "html2canvas";

const UserTicket: () => React.JSX.Element = (): React.JSX.Element => {

    const { user } = useUser()!;
    const { id } = useParams();

    return <article className="w-full flex flex-col gap-5 lg:gap-7">

        <div className="relative w-fit mx-auto" id="ticket">

            <figure className="min-w-[295px] max-w-[600px] mx-auto">
                <img className="w-full h-full" src="/images/pattern-ticket.svg" alt="ticket" />
            </figure>

            <div className="flex flex-col gap-1 absolute top-3 left-3 sm-c:top-6 sm-c:left-6">
                <img className="w-28 ph-1:w-40" src="/images/logo-full.svg" alt="logo_full" />
                <p className="text-[.7rem] ph-1:text-[1rem]">JAN 31, 2025 / AUSTIN, TK</p>
            </div>


            <div className="absolute bottom-2 left-3 flex items-center gap-2 sm-c:bottom-6 sm-c:left-6">
                <figure className="w-8 h-8 ph-1:w-12 ph-1:h-12 rounded-xl overflow-hidden">
                    <img className="w-full h-full bg-cover" src={user?.files && user?.files.length > 0 ? URL.createObjectURL(user?.files[0]) : "https://avatars.githubusercontent.com/u/168995027?s=400&v=4"} alt="" />
                </figure>

                <div className="flex flex-col gap-1">
                    <h1 className="text-[.8rem] ph-1:text-xl">{user?.full_name ?? "Unknown"}</h1>
                    <div className="flex items-center gap-1">
                        <figure className="w-5 h-5 ph-1:w-6 ph-1:h-6">
                            <img className="w-full h-full" src="/images/github.png" alt="github" />
                        </figure>
                        <p className="text-[.7rem] ph-1:text-[1rem]">@{user?.github_username ?? "unknown"}</p>
                    </div>
                </div>

            </div>

            <p className="rotate-90 absolute right-0 top-1/2 -translate-y-1/2 ph-1:text-2xl">{id?.slice(0, 5)}#</p>

        </div>

        <button className="w-fit mx-auto py-2 px-5 rounded-full bg-orange-500 text-[.9rem] lg:text-[1rem] cursor-pointer hover:bg-orange-700 transcition-colors duration-300 ease-in-out" onClick={(): void => {



            html2canvas(document.querySelector("#ticket")!).then(canvas => {
                const a = document.createElement("a");
                const img: string = canvas.toDataURL("image/png");

                a.href = img;
                a.download = "ticket.png";

                a.click();
            });




        }}>Download your ticket</button>

    </article>
}

export default UserTicket;