import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
export default CardLoader = () => {
    return (
        <ContentLoader
            speed={1}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="white"
            foregroundColor="black"

        >
            <Rect x="0" y="0" rx="10" ry="10" width="120" height="60" />
        </ContentLoader>
    )
}

export const CashbackLoader = () => {
    return (
        <ContentLoader
            speed={1}
            width={120}
            height={8}
            viewBox="0 0 120 8"
            backgroundColor="white"
            foregroundColor="black"
        >
            <Rect x="0" y="0" rx="3" ry="3" width="120" height="8" />
        </ContentLoader>
    )
}