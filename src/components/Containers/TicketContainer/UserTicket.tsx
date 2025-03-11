import React from "react";
import { useParams } from "react-router";
import domtoimage from "dom-to-image";
import dayjs from "dayjs";
import useUser from "../../../hooks/useUser";

const UserTicket: () => React.JSX.Element = (): React.JSX.Element => {

    const { user } = useUser()!;
    const { id } = useParams();

    return <article className="w-full flex flex-col gap-5 lg:gap-7">

        <div className="relative w-fit mx-auto">

            <div id="ticket">
                <figure className="min-w-[295px] max-w-[600px] mx-auto">
                    <img height={"20px"} width={"20px"} className="w-full h-full" src="/images/pattern-ticket.webp" alt="ticket" fetchPriority="high" />
                </figure>

                <div className="flex flex-col gap-1 absolute top-3 left-3 sm-c:top-6 sm-c:left-6 sm-c:gap-2">
                    <img height={"20px"} width={"20px"} className="w-28 ph-1:w-40" src="/images/logo-full.svg" alt="logo_full" />
                    <p className="text-[.7rem] ph-1:text-[1rem] text-neutral-400">{dayjs().add(3, "month").format("DD MMM, YYYY").toUpperCase()} / USA, LA</p>
                </div>

                <div className="absolute bottom-2 left-3 flex items-center gap-2 sm-c:bottom-6 sm-c:left-6 sm-c:gap-3">
                    <figure className="w-8 h-8 ph-1:w-12 ph-1:h-12 rounded-xl overflow-hidden">
                        <img height={"20px"} width={"20px"} className="h-full w-full object-cover" src={user?.files && user?.files.length > 0 ? URL.createObjectURL(user?.files[0]) : "https://avatars.githubusercontent.com/u/168995027?s=400&v=4"} alt="small_picture" />
                    </figure>

                    <div className="flex flex-col gap-[.1rem]">
                        <p className="text-[.8rem] ph-1:text-xl">{user?.full_name ?? "Unknown"}</p>
                        <a className="flex items-center gap-[.2rem] cursor-pointer" href={"https://github.com/" + user?.github_username} target="_blank" >

                            <img height={"20px"} width={"20px"} className="w-[.8rem] h-[.8rem] ph-1:w-5 ph-1:h-5" src="/icons/icon-github.svg" alt="github" />

                            <p className="text-[.7rem] ph-1:text-[1rem] text-neutral-400">@{user?.github_username ?? "unknown"}</p>
                        </a>
                    </div>

                </div>

                <p className="rotate-90 absolute right-0 top-1/2 -translate-y-1/2 ph-1:text-2xl text-neutral-400">{id?.slice(0, 5)}#</p>
            </div>

        </div>

        <button className="w-fit mx-auto py-2 px-5 rounded-full bg-orange-500 text-[.9rem] font-bold lg:text-[1rem] cursor-pointer hover:bg-orange-700 transcition-colors duration-300 ease-in-out" onClick={(): void => {

            const element: HTMLElement | null = document.getElementById("ticket");

            if (element) {
                domtoimage.toPng(element).then((dataUrl: string) => {
                    const link: HTMLAnchorElement = document.createElement("a");
                    link.href = dataUrl;
                    link.download = `CodingConf_Ticket#${id?.slice(0, 5)}.png`;
                    link.click();
                });
            }


        }}>Download your ticket</button>

    </article>
}

export default UserTicket;