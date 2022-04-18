const [color, setColor] = useState("pink")

setColor('yellow')

const [color, setColor] = useState(true)

setColor(prev => {
    if (prev === 'pink') {
        return 'blue'
    } else if (prev === 'blue') {
        return 'pink'
    }
})

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prev => {
    return {
        ...prev,
        firstName: "matt",
        lastName: "smith"
    }
})

const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => {
    [...prevColors, "green"]
})
const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState=> {
	 ({
		count: prevState.count + 1
	})
})

const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
})

setPerson(setperson => {
    return {
        ...setperson,
        age: 30
    }
})