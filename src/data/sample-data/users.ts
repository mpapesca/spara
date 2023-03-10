import { IUser } from "../types";

const users: IUser[] = [
  {
    id: 1,
    username: 'mpapesca',
    email: 'michael.papesca@gmail.com',
    firstName: 'Michael',
    lastName: 'Papesca',
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1610795384821-2eed2f416f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2UlMjBzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    username: "Laurine99",
    email: "Magni sit amet tempore omnis. Itaque incidunt ratione. Consequatur ut tempore. Voluptas sunt quidem voluptate aut commodi.",
    firstName: "Thora",
    lastName: "Clifford",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZSUyMHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    username: "Nella26",
    email: "In facilis sequi ea quisquam. Impedit enim ut inventore consequatur architecto enim modi esse porro.",
    firstName: "Roderick",
    lastName: "Maxine",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2UlMjBzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    username: "Alden49",
    email: "corrupti voluptatem commodi",
    firstName: "Shanny",
    lastName: "Ezra",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1595133403068-167e49b8569b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhY2UlMjBzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    username: "Dario33",
    email: "Repudiandae impedit rerum perspiciatis aut.",
    firstName: "Chloe",
    lastName: "Romaine",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1623252327694-ca5ed9b6378f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2UlMjBzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

  },
  {
    id: 6,
    username: "Marguerite_Rath15",
    email: "Quia nostrum quidem vero soluta. Dolor nostrum dolores voluptatem. Debitis accusantium vel quas iusto et quasi. Et exercitationem quaerat nisi rerum. Facere officia optio laudantium sapiente.",
    firstName: "Dixie",
    lastName: "Columbus",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhY2UlMjBzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    username: "Federico_King37",
    email: "Voluptatem vero dolorem placeat cupiditate.",
    firstName: "Isabella",
    lastName: "Rebekah",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGZhY2UlMjBzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 8,
    username: "George27",
    email: "illum suscipit assumenda",
    firstName: "Darren",
    lastName: "Claudia",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1669310114551-28f549e07792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcwfHxmYWNlJTIwc2hvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 9,
    username: "Roberto.Hamill",
    email: "rem",
    firstName: "Jodie",
    lastName: "Monserrat",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1590895340509-793cb98788c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxmYWNlJTIwc2hvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 10,
    username: "Ova_Murphy",
    email: "consequuntur et perferendis",
    firstName: "Neva",
    lastName: "Augustina",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZhY2UlMjBzaG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 11,
    username: "Christine72",
    email: "Non ipsum et eos tenetur odit enim.\nConsectetur eligendi molestiae iusto quos sit.\nLaudantium facere quis voluptate doloribus.",
    firstName: "Jamison",
    lastName: "Romaine",
    rating: (Math.random() * 5),
    image: 'https://images.unsplash.com/photo-1648025652271-9260296d3d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxmYWNlJTIwc2hvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  }
];

export default users;