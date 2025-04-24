import { v4 as uuid } from 'uuid';
import { IFile } from "../Interfaces/interfaces";


export const fileTree: IFile = {
    id: uuid(),
    fileName: "VS Code Clone",
    isFolder: true,
    children: [
        {
            id: uuid(),
            fileName: "node_modules",
            isFolder: true,
            children: [
                {
                    id: uuid(),
                    fileName: ".vite",
                    isFolder: true,
                    children: [
                        {
                            id: uuid(),
                            fileName: "react.js",
                            isFolder: false,
                            content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi possimus asperiores ut deserunt vero, rem porro cum doloremque omnis delectus commodi animi sit optio dolorum eum velit at eius. Porro aut recusandae ab voluptates eligendi error et vero reiciendis neque doloremque ut fuga aspernatur ipsa architecto tempore inventore rem, aliquid perspiciatis magnam similique vitae? Corrupti perspiciatis dignissimos adipisci unde quos officiis soluta, odio nisi sunt ipsum nihil provident maiores ullam tempore aliquid dolorum? Perspiciatis nesciunt labore doloribus? Ad minus officiis facere impedit ullam iste saepe quas molestiae illum beatae, hic ea obcaecati cupiditate tenetur labore quibusdam distinctio. Explicabo, molestiae. Animi exercitationem consectetur numquam illum, neque laboriosam officiis ab ut qui nihil sapiente voluptate possimus consequatur vero in quae, quia sit aperiam, rem quo minima laborum! Iste repellendus distinctio debitis rem fugiat molestias. Animi distinctio voluptas ipsum dolorem blanditiis officiis iste sunt consectetur tenetur numquam eligendi aliquam at eos vel delectus ipsa sed labore nostrum, maxime et aperiam, enim facere necessitatibus? Dignissimos, optio eaque laudantium possimus quas fuga eligendi natus blanditiis expedita! Perferendis velit debitis facilis sint officiis suscipit vitae perspiciatis consectetur fugiat atque, voluptatibus quas distinctio? Dolorum aliquid unde rerum, esse porro error recusandae magni temporibus numquam delectus hic iusto nostrum quasi molestiae cum. Sed voluptate veritatis, delectus odio quod, aliquam aut nulla doloremque perferendis nostrum quasi, temporibus cupiditate quo dicta! Necessitatibus accusantium atque nisi esse! Explicabo consequuntur quod cumque ad et eum ab saepe maxime modi vero natus unde minima, nulla quibusdam! Accusantium nam esse incidunt maxime quis natus earum nesciunt ipsa laudantium cupiditate distinctio commodi ex nemo dolore saepe corrupti consectetur dolores, possimus quasi non laborum iure veritatis hic eveniet! Exercitationem veritatis magni possimus quibusdam velit ullam. Natus eveniet officiis suscipit quisquam ea, aspernatur consectetur sapiente eaque accusantium sunt voluptatem incidunt dignissimos corrupti animi modi pariatur sint.</p>`
                        }
                    ]
                }

            ]
        },
        {
            id: uuid(),
            fileName: "public",
            isFolder: true,
            children: [
                {
                    id: uuid(),
                    fileName: "index.html",
                    isFolder: false,
                    content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi possimus asperiores ut deserunt vero, rem porro cum doloremque omnis delectus commodi animi sit optio dolorum eum velit at eius. Porro aut recusandae ab voluptates eligendi error et vero reiciendis neque doloremque ut fuga aspernatur ipsa architecto tempore inventore rem, aliquid perspiciatis magnam similique vitae? Corrupti perspiciatis dignissimos adipisci od cumque ad et eum ab saepe maxime modi vero natus unde minima, nulla quibusdam! Accusantium nam esse incidunt maxime quis natus earum nesciunt ipsa laudantium cupiditate distinctio commodi ex nemo dolore saepe corrupti consectetur dolores, possimus quasi non laborum iure veritatis hic eveniet! Exercitationem veritatis magni possimus quibusdam velit ullam. Natus eveniet officiis suscipit quisquam ea, aspernatur consectetur sapiente eaque accusantium sunt voluptatem incidunt dignissimos corrupti animi modi pariatur sint.</p>`
                },
            ]
        },
        {
            id: uuid(),
            fileName: "src",
            isFolder: true,
            children: [
                {
                    id: uuid(),
                    fileName: "index.tsx",
                    isFolder: false,
                    content: `
                            export default function Data () {
                                return IFile[]
                            }`
                },
                {
                    id: uuid(),
                    fileName: "main.css",
                    isFolder: false,
                    content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi possimus asperiores ut deserunt vero, rem porro cum doloremque omnis delectus commodi animi sit optio dolorum eum velit at eius. Porro aut recusandae ab voluptates eligendi error et vero reiciendis neque doloremque ut fuga aspernatur ipsa architecto tempore inventore rem, aliquid perspiciatis magnam similique vitae? Corrupti perspiciatis dignissimos adipisci unde quos officiis soluta, odio nisi sunt ipsum nihil provident maiores ullam tempore aliquid dolorum? Perspiciatis nesciunt labore doloribus? Ad minus officiis facere impedit ullam iste saepe quas molestiae illum beatae, hic ea obcaecati cupiditate tenetur labore quibusdam distinctio. Explicabo, molestiae. Animi exercitationem consectetur numquam illum, neque laboriosam officiis ab ut qui nihil sapielectus hic iusto nostrum quasi molestiae cum. Sed voluptate veritatis, delectus odio quod, aliquam aut nulla doloremque perferendis nostrum quasi, temporibus cupiditate quo dicta! Necessitatibus accusantium atque nisi esse! Explicabo consequuntur quod cumque ad et eum ab saepe maxime modi vero natus unde minima, nulla quibusdam! Accusantium nam esse incidunt maxime quis natus earum nesciunt ipsa laudantium cupiditate distinctio commodi ex nemo dolore saepe corrupti consectetur dolores, possimus quasi non laborum iure veritatis hic eveniet! Exercitationem veritatis magni possimus quibusdam velit ullam. Natus eveniet officiis suscipit quisquam ea, aspernatur consectetur sapiente eaque accusantium sunt voluptatem incidunt dignissimos corrupti animi modi pariatur sint.</p>`
                },
                {
                    id: uuid(),
                    fileName: "app.jsx",
                    isFolder: false,
                    content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi possimus asperiores ut deserunt vero, rem porro cum doloremque omnis delectus commodi animi sit optio dolorum eum velit at eius. Porro aut recusandae ab voluptates eligendi error et vero reiciendis neque doloremque ut fuga aspernatur ipsa architecto tempore inventore rem, aliquid perspiciatis magnam similique vitae? Corrupti perspiciatis dignissimos adipisci unde quos officiis soluta, odio nisi sunt ipsum nihil provident maiores ullam tempore aliquid dolorum? Perspiciatis nesciunt labore doloribus? Ad minus officiis facere impedit ullam iste saepe quas molestiae illum beatae, hic ea obcaecati cupiditate tenetur labore quibusdam distinctio. Explicabo, molestiae. Animi exercitationem consectetur numquam illumveritatis magni possimus quibusdam velit ullam. Natus eveniet officiis suscipit quisquam ea, aspernatur consectetur sapiente eaque accusantium sunt voluptatem incidunt dignissimos corrupti animi modi pariatur sint.</p>`
                },
                {
                    id: uuid(),
                    fileName: "components",
                    isFolder: true,
                    children: [
                        {
                            id: uuid(),
                            fileName: "Button.jsx",
                            isFolder: false,
                            content: `
                            export default function Button () {
                                return <button>submit</button>
                            }`
                        }
                    ]
                },
            ]
        },

        {
            id: uuid(),
            fileName: "index.hbnjmtml",
            isFolder: false,
            content: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex modi possimus asperiores ut deserunt vero, rem porro cum doloremque omnis delectus commodi animi sit optio dolorum eum velit at eius. Porro aut recusandae ab voluptates eligendi error et vero reiciendis neque doloremque ut fuga aspernatur ipsa architecto tempore inventore rem, aliquid perspiciatis magnam similique vitae? Corrupti perspiciatis dignissimos adipisci unde quos officiis soluta, odio nisi sunt ipsum nihil provident maiores ullam tempore aliquid dolorum? Perspiciatis nesciunt labore doloribus? Ad minus officiis facere impedit ullam iste saepe quas molestiae illum beatae, hic ea obcaecati cupiditate tenetur labore quibusdam distinctio. Explicabo, molestiae. Animi exercitationem consectetur numquam illum, neque laboriosam officiis ab ut qui nihil sapiente voluptate possimus consequatur vero in quae, quia sit aperiam, rem quo minima laborum! Iste repellendus distinctio debitis rem fugiat molestias. Animi distinctio voluptas ipsum dolorem blanditiis officiis iste sunt consectetur tenetur numquam eligendi aliquam at eos vel delectus ipsa sed labore nostrum, maxime et aperiam, enim facere necessitatibus? Dignissimos, optio eaque laudantium possimus quas fuga eligendi natus blanditiis expedita! Perferendis velit debitis facilis sint officiis suscipit vitae perspiciatis consectetur fugiat atque, voluptatibus quas distinctio? Dolorum aliquid unde rerum, esse porro error recusandae magni temporibus numquam delectus hic iusto nostrum quasi molestiae cum. Sed voluptate veritatis, delectus odio quod, aliquam aut nulla doloremque perferendis nostrum quasi, temporibus cupiditate quo dicta! Necessitatibus accusantium atque nisi esse! Explicabo consequuntur quod cumque ad et eum ab saepe maxime modi vero natus unde minima, nulla quibusdam! Accusantium nam esse incidunt maxime quis natus earum nesciunt ipsa laudantium cupiditate distinctio commodi ex nemo dolore saepe corrupti consectetur dolores, possimus quasi non laborum iure veritatis hic eveniet! Exercitationem veritatis magni possimus quibusdam velit ullam. Natus eveniet officiis suscipit quisquam ea, aspernatur consectetur sapiente eaque accusantium sunt voluptatem incidunt dignissimos corrupti animi modi pariatur sint.</p>`
        },

    ]

}