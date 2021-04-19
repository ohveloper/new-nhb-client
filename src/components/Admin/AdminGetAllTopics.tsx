import React from 'react';

interface AdminGetAllTopicsProps {
  id: number;
  word: string;
  expiration: string;
}

export default function AdminGetAllTopics({
  id,
  word,
  expiration,
}: AdminGetAllTopicsProps) {
  return (
    <div>
      <h1>AdminGetAllTopics</h1>
      <div>{id}</div>
      <div>{word}</div>
      <div>{expiration}</div>
    </div>
  );
}
