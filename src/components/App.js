import React, { useState, useEffect } from 'react'
import {
  Button,
  Container,
  Heading,
  Text,
  Flex,
  Wrap,
  WrapItem,
  Input,
} from '@chakra-ui/react'
import { SlideFade } from '@chakra-ui/transition'

const questions = [
  {
    id: 1,
    question: 'How much do you know about coffee?',
    answers: [
      { id: 1, answer: 'Beginner' },
      { id: 2, answer: 'Intermediate' },
      { id: 3, answer: 'Advanced' },
    ],
  },
  {
    id: 2,
    question: 'Favourite type of Chocolate?',
    answers: [
      { id: 1, answer: 'Milk' },
      { id: 2, answer: 'White' },
      { id: 3, answer: 'Dark' },
      { id: 4, answer: "Reese's" },
    ],
  },
  {
    id: 3,
    question: 'What’s your go to brew?',
    answers: [
      { id: 1, answer: 'French Press' },
      { id: 2, answer: 'Espresso' },
    ],
  },
]

function App() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState()
  const [isCompleted, setIsCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const q = questions[activeQuestionIndex]

  useEffect(() => {
    if (!isCompleted || !isLoading) return

    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 500)
  }, [isLoading, isCompleted])

  return (
    <Container maxW={1200} pt={8}>
      <Heading pb={8}>Coffee Quiz Demo</Heading>
      {!q && !isCompleted && !isLoading && !isSubmitted && (
        <Text mb={4}>
          Hello 👋 , this is a demo for how we can implement a quiz on your
          website. Keep in mind this is a quick protoype just to show basic
          functionality. The final implementation will have all the bells and
          whistles. Please click the button below to begin the demo.
        </Text>
      )}
      {isSubmitted && (
        <Flex direction="column">
          <Text mb={4}>
            We have emailed your recommendations. Of course, this is a demo so
            email functionality has not been implemented yet 🙂
          </Text>
          <Button
            w={250}
            onClick={() => {
              setActiveQuestionIndex(null)
              setIsCompleted(false)
              setIsSubmitted(false)
              setIsLoading(false)
            }}
          >
            Restart the Demo
          </Button>
        </Flex>
      )}
      {!q && !isCompleted && !isSubmitted && (
        <Button onClick={() => setActiveQuestionIndex(0)}>Start Quiz</Button>
      )}
      {isCompleted && !isSubmitted && (
        <Flex
          as="form"
          direction="column"
          onSubmit={e => {
            e.preventDefault()
            setIsLoading(true)
          }}
        >
          <Text mb={4}>
            You have completed the quiz! Please provide your email address to
            receive a custom recommendation.
          </Text>
          <Input
            w={350}
            placeholder="Email address"
            mb={4}
            type="email"
            required
            name="email"
          />
          <Button type="submit" w={250} isLoading={isLoading}>
            Get My Recommendations
          </Button>
        </Flex>
      )}
      {q && (
        <Flex key={q.id} direction="column" pb={8}>
          <SlideFade in>
            <Text size="xs" color="gray.500" mb={2}>
              {`${activeQuestionIndex + 1} of ${questions.length}`}
            </Text>
          </SlideFade>
          <SlideFade in>
            <Heading size="lg">{q.question}</Heading>
          </SlideFade>
          <Wrap mt={4} spacing={2}>
            {q.answers.map(a => (
              <SlideFade in>
                <WrapItem key={a.id}>
                  <Flex
                    px={6}
                    py={8}
                    border="1px solid #e9e9e9"
                    borderRadius={3}
                    cursor="pointer"
                    direction="column"
                    w={400}
                    onClick={() => {
                      const nextQuestion = questions[activeQuestionIndex + 1]

                      if (nextQuestion) {
                        setActiveQuestionIndex(activeQuestionIndex + 1)
                      } else {
                        setActiveQuestionIndex(null)
                        setIsCompleted(true)
                      }
                    }}
                  >
                    <Text fontWeight="bold" fontSize="lg" mb={2}>
                      {a.answer}
                    </Text>
                    <Text>
                      A detailed description can appear here. We can place on
                      icon on the left as well.
                    </Text>
                  </Flex>
                </WrapItem>
              </SlideFade>
            ))}
          </Wrap>
        </Flex>
      )}
    </Container>
  )
}

export default App
