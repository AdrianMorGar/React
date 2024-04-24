export const Square = ({ children, isSelected, updateBoard, index, board }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    let newIndex = index

    while (newIndex + 7 < 42 && board[newIndex + 7] === null) {
      newIndex += 7;
    }
  
    updateBoard(newIndex);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}