import FactsAboutJesus from "@/blogcontent/FactsAboutJesus"
import WarningsAboutIdolatry from "@/blogcontent/WarningsAboutIdolatry";
import WondersOfBible from "@/blogcontent/WondersOfBible";

const factsAboutJesus = {
    id: 1,
    title: "Facts about Jesus Christ",
    shortDescription: "Facts about Jesus Christ According to the Bible, Jesus Christ is a central figure in Christianity and is considered the only begotten Son of God and the Savior of humanity.",
    createdAt: new Date("2024-06-11"),
    content: <FactsAboutJesus />
};

const warningsAboutIdolatry = {
    id: 2,
    title: "Bible Warnings about Idolatry",
    shortDescription: "Bible Warnings about Idolatry Idolatry is a concept mentioned in the Bible that refers to the worship of idols or false gods. The Bible contains several references condemning idolatry and emphasizing the worship of the one true God",
    createdAt: new Date("2024-03-04"),
    content: <WarningsAboutIdolatry />
};

const wonderOfBible = {
    id: 3,
    title: "Ten Wonders of the Bible",
    shortDescription: "What is Bible? Why is the Holy Bible is known by many people and considered as a word given by God? Why the Bible can change lives? Does Bible tell anything about our humanity? Does its future predictions are happening or not? ---",
    createdAt: new Date("2024-12-03"),
    content: <WondersOfBible />
};


export const posts = [
    factsAboutJesus,
    warningsAboutIdolatry,
    wonderOfBible,
]