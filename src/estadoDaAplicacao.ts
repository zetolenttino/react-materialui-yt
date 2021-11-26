import { useState } from "react";

export type EstadoDoMenu = "aberto"|"fechado"|"fixo"

export function useEstadoDaAplicacao() {
    const [estadoDoMenu, setaEstadoDoMenu] = useState<EstadoDoMenu>("fechado")
    return {
        get estadoDoMenu() {
            return estadoDoMenu
        },
        abrirMenu() {
            setaEstadoDoMenu('aberto')
        },
        fecharMenu() {
            setaEstadoDoMenu('fechado')
        },
        fixarMenu() {
            setaEstadoDoMenu('fixo')
        },
    }
}