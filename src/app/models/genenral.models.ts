export interface ElementCollection {
    image: string,
    title: string,
    paragraph: string
}

export interface ChooseData {
    number: number,
    title: string,
    paragraph: string
}

export interface HeadquartersData{
    image: string,
    title: string,
    address: string,
    city: string,
    neighborhood: string,
    phone: string
}

export interface questions{
    title: string,
    first: QuestionsElements,
    second: QuestionsElements,
    third: QuestionsElements,
}

export interface QuestionsElements{
    title: string,
    paragraph: string
}