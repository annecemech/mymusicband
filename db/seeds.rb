puts "Start"
puts "Clean DB"
Member.destroy_all
Comment.destroy_all
Recording.destroy_all
Partition.destroy_all
Track.destroy_all
Band.destroy_all
User.destroy_all

#----------------------------------------------------
puts "Seeding users..."

user1 = User.new(
  first_name: "Kurt",
  last_name: "Cobain",
  email: "kurt@mymusicband.com",
  password: "123456",
  instrument: 1 # guitare?
)
user1.avatar.attach(io: URI.open('https://i1.wp.com/www.sensationrock.net/wp-content/uploads/2015/10/090218-kurt-cobain-1.jpg'), filename: 'kurt_cobain_photo.jpg', content_type: 'image/jpg')
user1.save!

user2 = User.new(
  first_name: "Dave",
  last_name: "Grohl",
  email: "dave@mymusicband.com",
  password: "123456",
  instrument: 1 # guitare?
)
user2.save!

user3 = User.new(
  first_name: "Nate",
  last_name: "Mendel",
  email: "nate@mymusicband.com",
  password: "123456",
  instrument: 2 # bass?
)
user3.save!

user4 = User.new(
  first_name: "Taylor",
  last_name: "Hawkins",
  email: "taylor@mymusicband.com",
  password: "123456",
  instrument: 3 # batterie?
)
user4.save!

#--------------------------------------------------------
puts "Seeding bands"

band1 = Band.new(
  name: "Scream",
  description: "Punk hardcore, post-hardcore, art rock",
  creation_year: "1981",
)
band1.save!

band2 = Band.new(
  name: "Nirvana",
  description: "Grunge, rock alternatif",
  creation_year: "1987",
)
band2.save!

band3 = Band.new(
  name: "Foo fighters",
  description: "Hard rock, post-grunge, alternative rock",
  creation_year: "1994"
)
band3.save!

#--------------------------------------------------------
puts "Seeding band members"

member1 = Member.new(
  band: band1,
  user: user1,
)
member1.save!

member2 = Member.new(
  band: band1,
  user: user2,
)
member2.save!

member3 = Member.new(
  band: band1,
  user: user3,
)
member3.save!

member4 = Member.new(
  band: band2,
  user: user4,
)
member4.save!

member5 = Member.new(
  band: band2,
  user: user3,
)
member5.save!

member6 = Member.new(
  band: band3,
  user: user3,
)
member6.save!

member7 = Member.new(
  band: band1,
  user: user4,
)
member7.save!

#--------------------------------------------------------
puts "Seeding tracks..."

track1 = Track.new(
  title: "Everlong",
  style: "Post-grunge",
  duration: 4*60+10,
  tempo: 156,
  pattern: 4 # 4/4
)
track1.band = band3
track1.save!

track2 = Track.new(
  title: "The Pretender",
  style: "Post-grunge",
  duration: 4*60+27,
  tempo: 172,
  pattern: 4 # 4/4
)
track2.band = band3
track2.save!

track3 = Track.new(
  title: "Best of You",
  style: "Post-grunge",
  duration: 4*60+16,
  tempo: 65,
  pattern: 4 # 4/4
)
track3.band = band3
track3.save!

#--------------------------------------------------------
puts "Seeding partitions"

partition1 = Partition.new(
  name: "Best drum tab I found so far",
  instrument: 3 #drums
)
partition1.track = track2
partition1.user = user2
partition1.save!

partition2 = Partition.new(
  name: "Guitar tab by Tokyo Hotel",
  instrument: 1 #guitar
)
partition2.track = track2
partition2.user = user2
partition2.save!

partition3 = Partition.new(
  name: "Goes like dom doum dom dom",
  instrument: 2 #bass
)
partition3.track = track2
partition3.user = user2
partition3.save!

#--------------------------------------------------------
puts "Seeding recording..."

recording1 = Recording.new(
  name: "First try with the drums",
  is_lead: false
)
recording1.partition = partition1
recording1.user = user4
recording1.save!

recording2 = Recording.new(
  name: "Now that's better",
  is_lead: true
)
recording2.partition = partition1
recording2.user = user4
recording2.save!

recording3 = Recording.new(
  name: "Tried a little solo at the end",
  is_lead: false
)
recording3.partition = partition2
recording3.user = user2
recording3.save!

#-------------------------------------------------------
puts "Seeding comments"

comment1 = Comment.new(
  content: "#guitar_recording Dave, keep to the tab for F#$! sake. Quit the solos!"
  )
comment1.user = user3
comment1.track = track2
comment1.save!

puts "Finished"
