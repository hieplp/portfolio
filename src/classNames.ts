import { twMerge } from 'tailwind-merge'

export default function classNames(...args: (string | undefined)[]) {
  return twMerge(args)
}
