import * as React from 'react'

import Modal from './Modal'

interface Props {}

interface State {
	isDisplayed: boolean
}

export class ModalButton extends React.Component<Props, State> {
	constructor(props: Props, state: State) {
		super(props, state)
		this.state = {
			isDisplayed: false
		}
	}

	private openModal = (): void => this.setState({ isDisplayed: true })
	private closeModal = (): void => this.setState({ isDisplayed: false })

	public render(): React.ReactNode {
		// TODO: add react-intl for i18n
		const footer = (
			<div className='modal-footer'>
				<button onClick={this.closeModal}>
					Close
				</button>
			</div>
		)

		return (
			<div className='interaction'>
				<button onClick={this.openModal}>
					Click for Modal
				</button>
				{
					this.state.isDisplayed &&
					// dummy data for Modal component props
					<Modal
						title={"dummy title"}
						contents={"random contents"}
						footer={footer}
					/>
				}
			</div>
		)
	}
}