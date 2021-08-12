import {Navbar} from './Navbar'
import {useState} from 'react'
import ThemePicker from './ThemePicker'

type LayoutProps = {
  children: string;
}
export default function Layout({ children }:LayoutProps) {
  const [pickerOpen, setPickerOpen] = useState(false)
  return (
    <>
      <ThemePicker open={pickerOpen} />
      <div
        className={`transition-transform   ${
          pickerOpen
            ? 'translate-y-[124px] duration-[400ms] ease-out'
            : 'translate-y-0 duration-200 ease-in'
        }`}
      >
        <Navbar pickerOpen={pickerOpen} setPickerOpen={setPickerOpen} />
        <div className='px-10 mx-auto lg:max-w-5xl md:max-w-3xl'>
          {children}
        </div>
      </div>
    </>
  )
}
