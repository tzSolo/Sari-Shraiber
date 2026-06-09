import { useContext } from "react";
import { userContext } from "../context/userContext";

const useCrudEntity = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL + '/entities';
    const { user } = useContext(userContext);
    const { token } = user;

    const apiRequestWrapper = (func: any) => {
        try {
            const res = func();
            return res;
        }
        catch (e: any) {
            console.error(e.message);
        }
    }

    const createEntity = async (entityTable: string, newEntity: any) => {
        apiRequestWrapper(async () =>
            await fetch(`${baseUrl}/${entityTable}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newEntity)
            })
        )
    }

    const readAllEntities = async (entityTable: string) => {
        return apiRequestWrapper(async () => {
            const response = await fetch(`${baseUrl}/${entityTable}`);
            if (!response.ok) {
                throw new Error(`Can't fetch ${entityTable}`);
            }

            const result = await response.json();
            return result;
        })
    }

    const readEntity = async (entityTable: string, entityID: number) => {
        return apiRequestWrapper(async () => {
            const response = await fetch(`${baseUrl}/${entityTable}/${entityID}`);

            if (!response.ok) {
                throw new Error(`Can't fetch ${entityTable}`);
            }

            const result = await response.json();
            return result;
        })
    }

    const updateEntity = async (entityTable: string, entityID: number, updatedEntity: any) => {
        apiRequestWrapper(async () =>
            await fetch(`${baseUrl}/${entityTable}/${entityID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(updatedEntity)
            })
        )
    }

    const deleteEntity = async (entityTable: string, entityID: number) => {
        apiRequestWrapper(async () =>
            await fetch(`${baseUrl}/${entityTable}/${entityID}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
        )
    }

    return { createEntity, readAllEntities, readEntity, updateEntity, deleteEntity };
}

export default useCrudEntity;