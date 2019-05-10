import * as React from 'react'

interface Props {
	title?: string
	contents?: any
	footer?: JSX.Element
}

export default class Modal extends React.PureComponent<Props> {
	public render(): React.ReactNode {
		const {
			title,
			contents,
			footer
		} = this.props

		return (
			<div className='modal'>
				<div className='modal-header'>
					<b>{title}</b>
				</div>
				<div className='modal-body'>
					<p>{contents}</p>
				</div>
				{footer}
			</div>
		)
	}
}