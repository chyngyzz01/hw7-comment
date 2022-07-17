import UserInfo from './UserInfo'
import { dateformat } from '../helpers/general'
import CommentWrapper from './CommentWrapper'
import './Comment.css'

function Comment(props) {
	return (
		<div className='Comment'>
			<div className='userInfo'>
				<UserInfo author={props.author} />
			</div>
			<div className='commentWrapper'>
				<CommentWrapper>
					<p className='Comment-text'>{props.text}</p>
					<div className='Comment-date'>{dateformat(props.date)}</div>
				</CommentWrapper>
			</div>
		</div>
	)
}

export default Comment
