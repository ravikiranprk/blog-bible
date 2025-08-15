import TesPost from "@/blogcontent/TesPost"

const testPost = {
    id: 1,
    title: "Test Title",
    shortDescription: "Test Description",
    createdAt: new Date(),
    content: <TesPost />
};

const testPost2 = {
    id: 2,
    title: "Test Title 2",
    shortDescription: "Test Description 2",
    createdAt: new Date("2023-03-04"),
    content: <TesPost />
};

const testPost3 = {
    id: 3,
    title: "Test Title 3",
    shortDescription: "Test Description 3",
    createdAt: new Date("2024-12-03"),
    content: <TesPost />
};


export const posts = [
    testPost,
    testPost2,
    testPost3,
]