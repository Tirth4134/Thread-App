'use client';

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import {zodResolver} from '@hookform/resolvers/zod'
interface Props{
    user:{
        id:string;
        objectId:string;
        usrename:string;
        name:string;
        bio:string;
        iamge:string;
    };
    btnTitle:string;
}

const AccountProfile = ({user, btnTitle}: Props) => {
    const form = useForm({
        resolver:zodResolver()
    })
    return(
        <Form>
             
        </Form>
    )
}
export default AccountProfile;