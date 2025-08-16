"use client";

import SigninForm from "@/components/Forms/SigninForm";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Signin() {
    const { data: session } = useSession();    
    const router = useRouter();

    useEffect(() => {
        if(session?.user) router.replace(`/`);
    }, [session, router]);

    return <SigninForm />;
}