import React from 'react';
import Chessground from 'react-chessground'
import 'react-chessground/dist/styles/chessground.css';

class Demo extends React.Component {
    render () {
      return <Chessground />
    }
    reset = () => {
        this.chess.reset()
        this.setState({ fen: this.chess.fen() })
      }
      undo = () => {
        this.chess.undo()
        this.setState({ fen: this.chess.fen() })
      }
      promotion(e) {
        const { chess } = this
        const from = this.pendingMove[0]
        const to = this.pendingMove[1]
        chess.move({ from, to, promotion: e })
        this.setState({
          fen: chess.fen(),
          lastMove: [from, to],
          selectVisible: false
        })
        setTimeout(this.randomMove, 500)
      }
  }
  
  export default Demo;