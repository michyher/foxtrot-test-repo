# Ruby Inheritance Notes

class Hulu
    # attr_accessor creates a getter and a setter method for the instance variable, it gets passed
    attr_accessor :title, :run_time, :watch
    # Setter Method:
    def initialize(title, run_time)
       @title = title
       @run_time = run_time
       @watch = false 
    end
   
    # Getter Method:
    def get_show_data
        if @watch
            "You have watched the show #{@title} is #{@run_time} long."
        else
            "You have not watched the show #{@title} is #{@run_time} long."
        end
    end
end

# Netflix, Spotify, Youtube

class StreamingApp
    attr_accessor :title, :run_time, :played
    def initialize(title_param, run_time_param)
        @title = title_param
        @run_time = run_time_param
        @played = false
    end
    def get_show_data
        if @played
            "You have played #{@title}, and it is #{@run_time} long."
        else
            "You have not played #{@title}, and it is #{@run_time} long."
        end
    end
end


class Youtube < StreamingApp # Youtube is a subclass of Streaming App
    def initialize(title_param, run_time_param, creator_param)
        super(title_param, run_time_param)
        @creator = creator_param    # <-- instance variable 
    end
end
narwhal = Youtube.new("Narwhal Song", "3min", "Jack White")
p narwhal
#<Youtube:0x00007f94078e26a8 @title="Narwhal Song", @run_time="3min", @played=false, @creator="Jack White">

# -----------------------------------------------------------------------------
class Spotify < StreamingApp
    def initialize(title_param, run_time_param, type_of_param, artist_param)
        super(title_param, run_time_param)
        @type_of = type_of_param 
        @artist = artist_param
    end
end

rogan = Spotify.new("Joey Diaz", "3hrs", "podcast", "Joe Rogan")
p rogan
#<Spotify:0x00007fcf2880df28 @title="Joey Diaz", @run_time="3hrs", @played=false, @type_of="podcast", @artist="Joe Rogan">