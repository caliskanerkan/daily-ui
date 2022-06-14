import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input/Input';
import { Label } from '../../components/Label';
import { Link } from '../../components/Link';

export const Register = () => {
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="w-1/3 bg-white border border-indigo-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold border-b border-b-indigo-100 p-4 text-gray-900">
          Sign Up
        </h1>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-1 gap-4">
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                placeholder="Name"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <Label htmlFor="lastname">Lastname</Label>
              <Input
                placeholder="Lastname"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button>REGISTER</Button>
          </div>
          <div className="text-center">
            <Link className="text-center">Do you have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
