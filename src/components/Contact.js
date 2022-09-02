import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name,
        email,
        subject,
        message,
      }),
    })
      .then(() => {
        alert("Success!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <Center className="Contact" bgColor={"#000"} flexDir={"column"} mb={200}>
      <Text mb={2} color={"#fff"} fontSize={"2xl"}>
        CONTACT ME
      </Text>
      <Box
        borderRadius={"full"}
        height={"0.5"}
        width={10}
        bgColor={"#a2a2a2"}
      ></Box>
      <Text color={"#fff"} my={4}>
        Here is how you can reach me.
      </Text>
      <Box display={"flex"} flexDirection={"column"} w={"45vw"}>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input type="hidden" name="contact" value="contact" />
          <FormControl my={5} isRequired>
            <Input
              bg={"white"}
              _placeholder={{ color: "gray" }}
              type="text"
              placeholder="Name"
              color={"black"}
              onChange={handleName}
              name="name"
              value={name}
            />
          </FormControl>
          <FormControl mb={5} isRequired>
            <Input
              bg={"white"}
              placeholder="Email"
              _placeholder={{ color: "gray" }}
              _autofill={false}
              type="email"
              color={"black"}
              onChange={handleEmail}
              name="email"
              value={email}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              bg={"white"}
              placeholder="Subject"
              _placeholder={{ color: "gray" }}
              type="text"
              color={"black"}
              onChange={handleSubject}
              name="subject"
              value={subject}
            />
          </FormControl>
          <FormControl isRequired>
            <Textarea
              bg={"white"}
              color={"black"}
              h={200}
              mt={6}
              placeholder="Message"
              _placeholder={{ color: "gray" }}
              onChange={handleMessage}
              name="message"
              value={message}
            />
          </FormControl>
          <Button
            mt={5}
            alignSelf={"center"}
            borderColor={"white"}
            variant="outline"
            color={"white"}
            w={"22vw"}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default Contact;
