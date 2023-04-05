import React, { useState } from 'react';

import api from '../../services/api';

import { Header } from '../../components/Nav';

import { Form } from '../../components/Form';

export function SendContact() {

  const [message, setMessage] = useState("");
  const [interval, setInterval] = useState(0);
  const [isGroup, setIsGroup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);
  const [filterGroup, setFilterGroup] = useState("");

  const handleStart = async () => {

    try {
      setIsLoading(true);

      const { data } = await api.post('/message/massText', {
        message: message,
        interval: interval,
        isGroup: isGroup,
        filterGroup: filterGroup
      });

      setIsLoading(false);
      setData(true);

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />

      <Form
        data={data}
        handleStart={handleStart}
        interval={interval}
        isGroup={isGroup}
        isLoading={isLoading}
        message={message}
        setData={setData}
        setInterval={setInterval}
        setIsGroup={setIsGroup}
        setMessage={setMessage}
      />
    </>
  );
}