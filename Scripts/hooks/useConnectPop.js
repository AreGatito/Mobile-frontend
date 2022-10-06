export const useConnectPop = (pop) => {
    const openPop = () => [
        pop.style.display = "flex"
    ]
    const closePop = () => [
        pop.style.display = "none"
    ]

    return {
        openPop,
        closePop
    }
}