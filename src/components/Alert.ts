import Swal, { type SweetAlertIcon, type SweetAlertResult } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const Alert = async (title: string, text: string, icon: SweetAlertIcon): Promise<SweetAlertResult<any>> => {
  const content = MySwal.fire(
    `${title}`,
    `${text}`,
    `${icon}`
  )

  return await content
}
