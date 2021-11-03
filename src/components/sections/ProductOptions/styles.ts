import { createStyles, makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textGreen: {
			color: theme.palette.success.light,
		},
		textInfo: {
			color: theme.palette.info.main,
		},
		textRight: {
			textAlign: "right",
		},
		marginTop: {
			marginTop: "2rem",
		},
		buttonBase: {
			padding: "0.5rem",
			paddingRight: "1rem",
			borderRadius: 10,
		},
		textCapitalize: {
			textTransform: "capitalize",
		},
	})
)

export default useStyles
