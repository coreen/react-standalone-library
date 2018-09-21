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

	private onClick = (): void => this.setState({ isDisplayed: !this.state.isDisplayed })

	public render(): React.ReactNode {
		// TODO: add react-intl for i18n
		const footer = (
			<div>
				<button>Close</button>
			</div>
		)

		return (
			<div>
				<button onClick={this.onClick}>
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