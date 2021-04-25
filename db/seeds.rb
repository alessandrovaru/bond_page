# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


9.times do |i|
    Article.create(
      title: "Article #{i + 1}",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis urna neque, vitae efficitur mi ultrices quis. Morbi quis fringilla est. Fusce ut dui et neque vestibulum dapibus ac bibendum massa. Aliquam pellentesque molestie diam, hendrerit congue urna blandit sit amet. Ut sed dolor eget nibh vulputate dapibus. Etiam vitae lectus id lacus elementum vehicula vel in ipsum. Mauris egestas lorem id consequat venenatis. Proin viverra augue tellus. Phasellus porttitor sed quam id lacinia. Suspendisse fringilla luctus mi, sed ultrices sem pretium quis.'
    )
  end