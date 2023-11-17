const Footer = () => {
  const year = new Date
  return (
    <footer>
      © {year.getFullYear()} Copyright Social, All rights reserved.
    </footer>
  )
}

export default Footer