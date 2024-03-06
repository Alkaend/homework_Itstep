import { useEffect } from "react";

type ModalContentProps = {
	onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const ModalContent = ({ onClose }: ModalContentProps) => {
	useEffect(() => {
		console.log('Модальное окно создано.');
		return () => {
			console.log('Модальное окно удалено.');
		};
	}, []);


	return (
		<div className="modal">
			<div className="modal-content">I'm a modal dialog
				<button className="close-button" onClick={onClose}>X</button>
				<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
			</div>
		</div>
	);
}

export default ModalContent;