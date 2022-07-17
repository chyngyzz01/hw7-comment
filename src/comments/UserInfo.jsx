import Avatar from "./Avatar"
import './UserInfo.css'

function UserInfo(props) {
	return (
		<div className='UserInfo'>
			<Avatar user={props.author}/>
			<h1 className='UserInfo-name'>{props.author.name}</h1>
		</div>
	)
}
export default UserInfo
