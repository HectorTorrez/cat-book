import { Button } from './Button'
import { Reload } from './Icons'

interface RefreshProps {
  handleRefresh?: () => void
}
export const Refresh = ({ handleRefresh }: RefreshProps): JSX.Element => {
  return (
   <section className='flex max-w-5xl m-auto justify-end mt-3'>
     <Button text={<Reload />} handleClick={handleRefresh} type={'button'} />
   </section>

  )
}
