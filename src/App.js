import './App.css'
import Comment from './comments/Comment'

function App() {
	const comment = [
		{
			id: 1,
			date: new Date(),
			text: 'I hope you enjoy learning React!',
			author: {
				name: 'Hello Naruto',
				avatarUrl:
					'https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo',
			},
		},
		{
			id: 2,
			date: new Date(),
			text: 'I hope you enjoy learning React!',
			author: {
				name: 'Hello Sasuke',
				avatarUrl:
					'https://i.pinimg.com/736x/04/d7/a3/04d7a346451b21ad9fb791004188eb7c.jpg',
			},
		},
		{
			id: 3,
			date: new Date(),
			text: 'I hope you enjoy learning React!',
			author: {
				name: 'Hello Sakura',
				avatarUrl:
					'https://popartblog.ru/wp-content/uploads/2020/08/sakura-min.png',
			},
		},
	]

	return (
		<div className='App'>
			{comment.map((item) => (
				<Comment
					key={item.id}
					author={item.author}
					text={item.text}
					date={item.date}
				/>
			))}
		</div>
	)
}

export default App
