import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: number;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      phone?: string | null;
      age?: number | null;
    };
  }

  interface User {
    id?: number;
    phone?: string | null;
    age?: number | null;
  }
}
