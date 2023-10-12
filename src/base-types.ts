export interface IWeb360Config{
    container: HTMLDivElement
}

export interface IImageConfig{
    imageURL: string
}

enum TransitionType{
    ZoomIn = 0,
    ZoomOut
}

interface NavigatorCoords{
    x: number,
    y: number,
    z: number
}

export interface INavigator{
    source: number,
    destination: number,
    coords: NavigatorCoords,
    transitionType: TransitionType
}