import React from 'react';

type Props = { params: { id: string } };

const Page = ({ params }: Props) => {
  return <div>Blog ID: {params.id}</div>;
};

export default Page;