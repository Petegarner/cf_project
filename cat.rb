class Pet
	attr_reader :color, :breed
	attr_accessor :name
	def initialize(color, breed)
		@color = color
		@breed = breed
		@hungry = true
	end

	def feed(food)
		puts "Mmm, " + food + "!"
		@hungry = false
	end

	def hungry?
		if @hungry
			puts "I\'m hungry!"
		else
			puts "I\'m full!"
		end
		@hungry
	end
end

class Cat < Pet
	def speak
		puts "Meow!"
	end
end

class Dog < Pet
	def speak
		puts "Woof Mutha Fucka!"
	end
end
puppy = Dog.new("tan", "Mutt")
puppy.speak
puts puppy.breed

kitty = Cat.new("grey", "persian")
puts "Let\'s inspect our new cat:"
puts kitty.inspect
puts "What class does our new cat belong to?"
puts kitty.class
puts "Is our new cat an object?"
puts kitty.is_a?(Object)
puts "What color is our cat?"
puts kitty.color
puts "Let\'s give our cat a name"
kitty.name = "Betsy"
puts kitty.name
puts "Is our cat hungry now?"
kitty.hungry?
puts "Let\'s feed our cat"
kitty.feed("tuna")
puts "Is our cat hungry now"
kitty.hungry?
puts "Our cat can make noise"
kitty.speak