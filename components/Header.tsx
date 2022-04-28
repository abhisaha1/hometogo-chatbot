import { Header as MantineHeader } from "@mantine/core"
import Image from 'next/image'
import { Stepper, } from '@mantine/core';

const InactiveStep = () => <div className="bg-gray-500-600 w1 rounded" />
const CompletedStep = () => <div className="bg-indigo-600 w1 rounded" />

export const Header = () => {
  return <MantineHeader height={100} p="xs" className="border-none">
    <div className="flex justify-center flex-col w-full items-center">
      <Image src='/HTG_logo_color.svg' height={50} width={37} layout="fixed" alt="htg logo" />

      <Stepper iconSize={11} size="xs" active={3} color="indigo" className="w-full relative" completedIcon={<CompletedStep />} styles={{
        separator: {
          marginLeft: -2,
          marginRight: -2,
        },
        step: {
          flexDirection: 'column-reverse',
          flexGrow: 1,
          gap: '0.5rem',
        },
        stepBody: {
          position: 'relative'
        },
        stepDescription: {
          position: 'absolute',
          bottom: '-2rem',
          width: '100%',
          textAlign: 'center',
          color: '#262626'
        },
      }}>
        <Stepper.Step label="Destination" icon={<InactiveStep />} description="Surprise me" />

        <Stepper.Step label="Experience" icon={<InactiveStep />} />

        <Stepper.Step label="Dates" icon={<InactiveStep />} />

        <Stepper.Step label="Guests" icon={<InactiveStep />} />

        <Stepper.Step label="Budget" icon={<InactiveStep />} />

      </Stepper>
    </div>
  </MantineHeader>
}