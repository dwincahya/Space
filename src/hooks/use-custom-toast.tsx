import Link from "next/link"
import { toast } from "./use-toast"
import { buttonVariants } from "@/components/ui/Button"

export const useCustomToast = () => {
    const loginToast = () => {
        const {dismiss} =toast({
            title: 'Login required.',
            description: 'You must login to create a community.',
            variant: 'destructive',
            action: (
                <Link href='/sign-in' onClick={() => dismiss()} className={buttonVariants({variant: "outline"})}>Login</Link>
            ),
        })
    }

    return {loginToast}
}