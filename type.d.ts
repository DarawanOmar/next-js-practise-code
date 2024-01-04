type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type User2 = {
  id: number;
  name: string;
  nickname: string | null;
  email: string;
  email_verified_at: string | null;
  phone_number: string;
};

type ToDo = {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
};

type Product = {
  product: string;
  price: string;
  catigorey: string;
  id?: number;
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};

type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};
