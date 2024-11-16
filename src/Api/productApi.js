import axiosClient from "./axiosClient"

const productApi= ({
        getApp(params){
            const url = `/products`
            return axiosClient.get(url,{params})
        },
        getId(id){
            const url = `/products/${id}`
            return axiosClient.get(url)
        },
        add(data){
            const url = `/products`
            return axiosClient.post(url,data)
        },
        update(data){
            const url = `/products/${data.id}`
            return axiosClient.patch(url,data)
        },
        remove(id){
            const url = `/products/${id}`
            return axiosClient.delete(url)
        }
})
export default productApi