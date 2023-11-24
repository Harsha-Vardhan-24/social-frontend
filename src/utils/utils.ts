export const signUpInitialValues = {
  email: '',
  fullName: '',
  userName: '',
  password: '',
}

export const loginInitialValues = {
  email: '',
  password: '',
}

export const redirectUser = (userEmail: string) => {
  localStorage.setItem("userEmail", userEmail)
}

export const userCheck = () => {
  if (localStorage.getItem("userEmail")) {
    return true
  } else {
    return false
  }
}

export const submitPost = (e: React.FormEvent) => {
  e.preventDefault();
   
}