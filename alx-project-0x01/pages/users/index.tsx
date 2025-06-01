import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const User: React.FC<UsersPageProps> = ({ users }) => {
  console.log(users);
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className="grid grid-cols-3 gap-2">
        {
          users?.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
            <UserCard
              key={key}
              id={id}
              username={username}
              name={name}
              email={email}
              address={address}
              phone={phone}
              website={website}
              company={company}
            />
          ))
        }
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      users: posts
    }
  };
}

export default User;
