import { customFetch } from "./axios"

export const updateUser = async (userDatas) => {
    const {data} = await customFetch.patch("/auth/updateUser" , userDatas)
    return data
}

export const addJob =async ({jobData , token}) => {
    const {data} = await customFetch.post("/jobs" , jobData)
    return data
}

export const deleteJob = async ({jobId , token}) => {
    const {data} = await customFetch.delete(`/jobs/${jobId}`)
    return data
}

export const editJob = async ({jobId , token , jobData}) => {
    const {data} = await customFetch.patch(`/jobs/${jobId}`,jobData)
    return data
}