import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    companyName: yup.string().required("Company Name alanı boş bırakılamaz"),
})


function ReactHookFormSample() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema)
    });

    const addSupplier = (values) => {

        console.log('VALUES ', values);
    }


    return (<>
        <form onSubmit={handleSubmit(addSupplier)}>
            <div>
                <label>Company Name</label>
                <input {...register("companyName")} />
                <p style={{color:'red'}}>{formState?.errors?.companyName?.message}</p>
            </div>
            <div>
                <label>Contact Name</label>
                <input {...register("contactName")} />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>
    )
}

export default ReactHookFormSample