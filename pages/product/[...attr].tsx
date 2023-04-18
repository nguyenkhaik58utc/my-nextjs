import { useRouter } from 'next/router';
import * as React from 'react';
import { json } from 'stream/consumers';


export interface IAppProps {
}

export default function App (props: IAppProps) {
    
const data = useRouter();

  return (
    <div>
      data :  {JSON.stringify(data.query)}
    </div>
  );
}
